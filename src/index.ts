import type { App } from 'vue';
import { UaForm, UaFormItem, UaFormInput } from "@/components/form";

export default {
    install: (app: App) => {
        app.component('UaForm', UaForm);
        app.component('UaFormItem', UaFormItem);
        app.component('UaFormInput', UaFormInput);
    }
};

export { UaForm, UaFormItem, UaFormInput };