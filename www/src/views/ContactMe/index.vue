<script setup lang="ts">
import { career } from "@/constant/career";
import { ref } from "vue";
import CraftPage from "@/components/CraftPage.vue";
import Form from "./../../components/Form";

const errorModal = ref(false);
const errorTitle = ref("");
const errorMessage = ref("");

function onSendError(err: any) {
    errorTitle.value = "Send Error";
    // try to extract a useful message from common error shapes
    try {
        if (!err) {
            errorMessage.value = "Unknown error";
        } else if (typeof err === "string") {
            errorMessage.value = err;
        } else if (err.text) {
            // emailjs errors often put the message in `text`
            errorMessage.value = err.text;
        } else if (err.message) {
            errorMessage.value = err.message;
        } else if (err.response && err.response.data) {
            const data = err.response.data;
            errorMessage.value = typeof data === "string" ? data : JSON.stringify(data, null, 2);
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
    <CraftPage
        label="03 / Contact"
        title="Let's build something"
        description="Share the role, team, and technical challenges. Let's talk about how my experience fits your team."
        meta="Philippines · UTC+8"
        flush
    >
        <template #title>Let's build <em>something that lasts.</em></template>
        <div class="contact-layout">
            <aside class="contact-details">
                <p class="contact-overline">Start a conversation</p>
                <h2>Get in touch.</h2>
                <p>{{ career.availability }}. My focus is {{ career.focus }}.</p>
                <div class="contact-methods">
                    <a :href="career.emailHref"
                        ><span>Email</span><strong>me@jenuel.dev <span aria-hidden="true">↗</span></strong></a
                    >
                    <a href="https://www.linkedin.com/in/jenuelganawed/" target="_blank" rel="noopener noreferrer"
                        ><span>Connect</span><strong>LinkedIn <span aria-hidden="true">↗</span></strong></a
                    >
                    <a href="/Jenuel Ganawed - Resume.pdf" target="_blank" rel="noopener noreferrer"
                        ><span>Background</span><strong>View resume <span aria-hidden="true">↗</span></strong></a
                    >
                </div>
            </aside>
            <div class="contact-me-form">
                <p class="contact-overline">Or leave a message</p>
                <Form @send-error="onSendError" />
            </div>
        </div>
        <div
            v-if="errorModal"
            class="error-modal-overlay"
            @click.self="errorModal = false"
            @keydown.esc="errorModal = false"
        >
            <div class="error-modal" role="dialog" aria-modal="true" aria-labelledby="send-error-title">
                <button class="close-button" aria-label="Close error message" @click="errorModal = false">×</button>
                <h3 id="send-error-title">{{ errorTitle }}</h3>
                <pre class="error-message">{{ errorMessage }}</pre>
            </div>
        </div>
    </CraftPage>
</template>
<style scoped lang="scss">
.contact-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
}
.contact-details,
.contact-me-form {
    padding: 40px;
    min-width: 0;
}
.contact-details {
    border-right: 1px solid var(--craft-line);
}
.contact-overline {
    margin: 0 0 28px;
    font: 11px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}
h2 {
    font: 600 32px var(--craft-heading);
    letter-spacing: -0.035em;
    color: var(--white);
    margin: 0 0 20px;
}
.contact-details > p:not(.contact-overline) {
    font-size: 16px;
    line-height: 1.7;
}
.contact-methods {
    display: grid;
    margin-top: 32px;
}
.contact-methods a {
    display: grid;
    gap: 10px;
    padding: 24px 0;
    color: var(--white);
    border-top: 1px solid var(--craft-line);
}
.contact-methods a > span {
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    color: var(--lightSlate);
}
.contact-methods strong {
    font-size: 18px;
    font-weight: 500;
}
.contact-methods a:hover strong {
    color: var(--primary);
}
.contact-me-form :deep(label) {
    display: inline-block;
    margin-bottom: 10px;
    font: 10px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
.contact-me-form :deep(input),
.contact-me-form :deep(textarea) {
    border: 1px solid var(--craft-line);
    border-radius: 0;
    background: transparent;
    color: var(--white);
    padding: 14px 16px;
    font-size: 16px;
}
.contact-me-form :deep(input::placeholder),
.contact-me-form :deep(textarea::placeholder) {
    color: var(--slate);
}
.contact-me-form :deep(textarea) {
    resize: vertical;
}
.contact-me-form :deep(button) {
    border-radius: 0;
    min-height: 48px;
    font: 11px var(--craft-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
}
.error-modal-overlay {
    position: fixed;
    inset: 0;
    background: #0009;
    display: grid;
    place-items: center;
    z-index: 110;
}
.error-modal {
    position: relative;
    width: min(600px, calc(100% - 32px));
    background: var(--background);
    color: var(--white);
    padding: 32px;
    border: 1px solid var(--craft-line);
}
.close-button {
    position: absolute;
    top: 12px;
    right: 16px;
    background: transparent;
    color: var(--white);
    font-size: 24px;
}
.error-message {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    max-height: 300px;
    overflow: auto;
    margin-top: 20px;
    font-size: 13px;
}
@media (max-width: 800px) {
    .contact-layout {
        grid-template-columns: 1fr;
    }
    .contact-details {
        border-right: 0;
        border-bottom: 1px solid var(--craft-line);
    }
    .contact-details,
    .contact-me-form {
        padding: 32px 20px;
    }
}
</style>
