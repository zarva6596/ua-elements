import UaFormInput from '@/components/form/UaFormInput.vue';

export const FormElements = {
    element: 'element',
    input: UaFormInput,
} as const;

export interface FormSchemaItem {
    name: string
    element: keyof typeof FormElements
    attr?: Record<string, string>
    class?: string
    value?: string
    option?: any[]
    children?: FormSchemaItem[]
}
