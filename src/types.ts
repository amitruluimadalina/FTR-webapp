export type NumberProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    firstElement: number;
    FIB: string;
};

export type FrequencyProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    disabled: boolean;
};