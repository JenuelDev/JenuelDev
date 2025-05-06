<script setup lang="ts">
import { reactive, ref } from "vue";
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
            title: `Successfully Sent! I'll Check them later. 😁👍`,
            description: `It seams that your message was send successfuly. I'm not online always but I will definitely check your message when I go online.`,
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
            title: "Some Fields Are Empty 😢😭📧",
            description: "Sorry about that, it seems that there are empty fields. Please fill them all out.",
            type: "error",
            show: true,
        });

        return false;
    }
    if (validateEmail(form.email) === false) {
        alertSet({
            title: "Oops! Invalid Email 😢😭📧",
            description: "Sorry about that, it seems that you have entered a wrong email format.",
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

                    if (error.response.status == 500) {
                        alertSet({
                            title: "Oops! Email Does not Exist! 😢😭📧",
                            description:
                                "Sorry about that, it seems that you have entered a wrong email, I cant find it anywhere.",
                            type: "error",
                            show: true,
                        });
                    }
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
                    <label>Name</label><br />
                    <input
                        v-model="form.name"
                        type="text"
                        placeholder="ex. Jenuel Dev"
                        class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-amber-1 py-3 px-5 w-full"
                    />
                </div>
                <div class="flex-1 w-full">
                    <label>Email</label><br />
                    <input
                        v-model="form.email"
                        type="email"
                        placeholder="ex. me@jenuel.dev"
                        class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-amber-1 py-3 px-5 w-full"
                    />
                </div>
            </div>
            <div class="text-left mb-5">
                <label>Subject</label>
                <input
                    v-model="form.subject"
                    type="text"
                    placeholder="What is this message about?"
                    class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-amber-1 py-3 px-5 w-full"
                />
            </div>
            <div class="text-left">
                <label>Message</label><br />
                <textarea
                    v-model="form.message"
                    name="msg"
                    placeholder="Let us know what’s on your mind."
                    rows="8"
                    class="rounded-1 border-[var(--lightBackground)] bg-[var(--lightBackground)] text-amber-1 py-3 px-5 w-full"
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
