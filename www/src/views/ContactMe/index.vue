<script setup lang="ts">
import { ref } from 'vue';
import SvgDecoration from '@/components/SvgDecoration/SvgDecoration.vue';
import Form from './../../components/Form';

const errorModal = ref(false);
const errorTitle = ref('');
const errorMessage = ref('');

function onSendError(err: any) {
    errorTitle.value = 'Send Error';
    // try to extract a useful message from common error shapes
    try {
        if (!err) {
            errorMessage.value = 'Unknown error';
        } else if (typeof err === 'string') {
            errorMessage.value = err;
        } else if (err.text) {
            // emailjs errors often put the message in `text`
            errorMessage.value = err.text;
        } else if (err.message) {
            errorMessage.value = err.message;
        } else if (err.response && err.response.data) {
            const data = err.response.data;
            errorMessage.value = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        } else if (err.response && err.response.statusText) {
            errorMessage.value = err.response.statusText;
        } else {
            // fallback to a pretty JSON string
            errorMessage.value = JSON.stringify(err, Object.getOwnPropertyNames(err), 2);
        }
    } catch (e) {
        errorMessage.value = String(err);
    }
    errorModal.value = true;
}

</script>
<template>
    <section v-scrollanimation
        class="contact-me max-w-[1000px] lg:mt-130px mx-auto text-center flex flex-col items-center relative">
        <h1
            class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px mb-15px md:px-10px">
            Contact me</h1>
        <p
            class="md:text-size-24px text-size-20px md:px-10px w-[100%] max-w-[770px] md:leading-relaxed leading-relaxed">
            I am currently not looking for Job. However, if you have other request or questions, don't hesitate to
            contact me using the form bellow.
        </p>
        <div v-scrollanimation class="contact-me-form max-w-[700px] w-[100%] mt-30px mb-100px">
            <Form @send-error="onSendError" />
        </div>

        <!-- Error modal -->
        <div v-if="errorModal" class="error-modal-overlay" @click.self="errorModal = false">
            <div class="error-modal">
                <button class="close-button" @click="errorModal = false">×</button>
                <h3 class="error-title">{{ errorTitle }}</h3>
                <pre class="error-message">{{ errorMessage }}</pre>
            </div>
        </div>
        <SvgDecoration
            classNames="absolute md:visible invisible left-[-50px] bottom-[80px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50"
            :type="1" />
        <SvgDecoration classNames="absolute md:right-0 md:visible invisible z-20 fill-[var(--primary)] opacity-50"
            :type="2" />
    </section>
</template>

<style lang="scss">
.contact-me-form {
    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
        transition-delay: 0.1s;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }
}

.contact-me {
    &.a-before-enter {
        opacity: 0;
        transform: translateY(20px);
        transition: 0.3s ease-in;
    }

    &.a-enter {
        opacity: 1;
        transform: translateY(0);
    }

    .form {
        margin-top: 30px;
    }

    .social-icons {
        margin-bottom: 20px;

        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            padding-left: 0;

            li {
                margin: 10px;

                .icons {
                    color: var(--v-slate-base);
                }

                &:hover {
                    .icons {
                        color: var(--v-primary-base);
                    }
                }
            }
        }
    }
}
</style>

<style scoped>
.error-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.error-modal {
    background: var(--background);
    color: var(--lightestSlate);
    max-width: 600px;
    width: 90%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.3);
    position: relative;
}
.close-button {
    position: absolute;
    right: 10px;
    top: 6px;
    background: transparent;
    border: none;
    font-size: 22px;
    cursor: pointer;
    color: var(--lightestSlate);
}
.error-title {
    margin: 0 0 10px 0;
}
.error-message {
    background: rgba(0,0,0,0.04);
    padding: 10px;
    border-radius: 6px;
    white-space: pre-wrap;
    max-height: 300px;
    overflow: auto;
}
</style>
