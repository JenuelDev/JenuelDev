<script setup lang="ts">
import { reactive, ref } from "vue";
const emit = defineEmits(["send-error"] as const);
import Alert from "./../alert/Alert.vue";
import emailjs from "@emailjs/browser";

const form = reactive({
    subject: "",
    name: "",
    email: "",
    message: "",
});

const alertShow = ref(false);
const alertTitle = ref("");
const alertDescription = ref("");
const alertType = ref("success");
const showError = ref(false);
const sent = ref(false);
const sending = ref(false);

const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const checkProperties = () => {
    return form.subject == "" || form.name == "" || form.email == "" || form.message == "" ? true : false;
};

const alertSet = ({ title, description, type, show }: any) => {
    alertTitle.value = title;
    alertDescription.value = description;
    alertType.value = type;
    alertShow.value = show;
};

const validateForm = async (sentSuccess = false) => {
    if (sentSuccess === true) {
        alertSet({
            title: `Message sent`,
            description: `Thank you for getting in touch. I will review your message and reply by email.`,
            type: "success",
            show: true,
        });
        form.subject = "";
        form.name = "";
        form.email = "";
        form.message = "";
        return;
    }

    if (checkProperties() === true) {
        alertSet({
            title: "Please complete all fields",
            description: "Include your name, email address, subject, and message.",
            type: "error",
            show: true,
        });

        return false;
    }
    if (validateEmail(form.email) === false) {
        alertSet({
            title: "Check your email address",
            description: "Enter a valid email address so I can reply.",
            type: "error",
            show: true,
        });
        return false;
    }

    return true;
};

async function sendEmail() {
    alertShow.value = false;
    sending.value = true;
    if (await validateForm()) {
        emailjs
            .send("service_88wvqn9", "template_nulphu2", form, {
                publicKey: "user_zdO7SqNAzUeW1bl8KtMhn",
            })
            .then(
                () => {
                    sent.value = true;
                    showError.value = false;
                    sending.value = false;
                    validateForm(true);
                },
                (error) => {
                    sent.value = false;
                    showError.value = false;
                    sending.value = false;

                    // emit an event so parent can show a modal with the error
                    try {
                        emit("send-error", error);
                    } catch (e) {
                        // ignore if emit isn't available for some reason
                    }

                    alertSet({
                        title: "Message could not be sent",
                        description: "Please try again or email me directly at me@jenuel.dev.",
                        type: "error",
                        show: true,
                    });
                },
            );
    } else {
        sending.value = false;
    }
}
</script>
<template>
    <div class="contact-form">
        <div>
            <Alert :show="alertShow" :description="alertDescription" :type="alertType" :title="alertTitle" />
            <div class="flex sm:flex-row flex-col text-left items-center gap-5 mb-5">
                <div class="flex-1 w-full">
                    <label for="contact-name">Name</label><br />
                    <input
                        id="contact-name"
                        autocomplete="name"
                        v-model="form.name"
                        type="text"
                        placeholder="ex. Jenuel Dev"
                        class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-[var(--lightestSlate)] py-3 px-5 w-full"
                    />
                </div>
                <div class="flex-1 w-full">
                    <label for="contact-email">Email</label><br />
                    <input
                        id="contact-email"
                        autocomplete="email"
                        v-model="form.email"
                        type="email"
                        placeholder="ex. me@jenuel.dev"
                        class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-[var(--lightestSlate)] py-3 px-5 w-full"
                    />
                </div>
            </div>
            <div class="text-left mb-5">
                <label for="contact-subject">Subject</label>
                <input
                    id="contact-subject"
                    v-model="form.subject"
                    type="text"
                    placeholder="What is this message about?"
                    class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-[var(--lightestSlate)] py-3 px-5 w-full"
                />
            </div>
            <div class="text-left">
                <label for="contact-message">Message</label><br />
                <textarea
                    id="contact-message"
                    v-model="form.message"
                    name="msg"
                    placeholder="Tell me about the role, team, and technical challenges."
                    rows="8"
                    class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-[var(--lightestSlate)] py-3 px-5 w-full"
                ></textarea>
            </div>
            <div class="mt-10px">
                <button
                    type="button"
                    class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 w-[100%]"
                    :class="{ 'opacity-50 hover:opacity-50 cursor-not-allowed': sending }"
                    @click="sendEmail()"
                    :disabled="sending"
                >
                    <p style="margin: 0">{{ sending ? "Sending..." : "Send" }}</p>
                </button>
            </div>
        </div>
    </div>
</template>
