type FormInputProps = {
    label: string;
    type: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required? : boolean;
};

const FormInput = ({ label, type, id, value, onChange, required }: FormInputProps) => (
    <div className="row mb-3">
        <label htmlFor={id} className="col-sm-2 col-form-label text-light">{label}</label>
        <div className="col-sm-10">
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={onChange}
                required = {required}
            />
        </div>
    </div>
);

export default FormInput;
