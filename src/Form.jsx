import "./Form.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Checkbox, Button } from "@mui/material";

const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    agree_to_terms: yup.boolean().oneOf([true], "You must agree to the terms"),
});

export default function Form() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (data) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="sky-form">
            <header>Registration form</header>
            <fieldset>
                <section>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Username"
                                placeholder="Username"
                                error={errors.username ? true : false}
                                helperText={errors.username?.message}
                            />
                        )}
                    />
                </section>
                <section>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email address"
                                placeholder="Email address"
                                error={errors.email ? true : false}
                                helperText={errors.email?.message}
                            />
                        )}
                    />
                </section>
                <section>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="password"
                                label="Password"
                                placeholder="Password"
                                error={errors.password ? true : false}
                                helperText={errors.password?.message}
                            />
                        )}
                    />
                </section>
                <section>
                    <Controller
                        name="confirm_password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="password"
                                label="Confirm password"
                                placeholder="Confirm password"
                                error={errors.confirm_password ? true : false}
                                helperText={errors.confirm_password?.message}
                            />
                        )}
                    />
                </section>
            </fieldset>
            <fieldset>
                <div className="row">
                    <section className="col col-6">
                        <Controller
                            name="first_name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="First name"
                                    placeholder="First name"
                                    error={errors.first_name ? true : false}
                                    helperText={errors.first_name?.message}
                                />
                            )}
                        />
                    </section>
                    <section className="col col-6">
                        <Controller
                            name="last_name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Last name"
                                    placeholder="Last name"
                                    error={errors.last_name ? true : false}
                                    helperText={errors.last_name?.message}
                                />
                            )}
                        />
                    </section>
                </div>
                <section>
                    <Controller
                        name="agree_to_terms"
                        control={control}
                        defaultValue={false}
                        render={({ field: { value, onChange } }) => (
                            <Checkbox
                                checked={value}
                                onChange={onChange}
                                name="agree_to"
                                color="primary"
                                inputProps={{
                                    "aria-label":
                                        "agree to terms of service checkbox",
                                }}
                            />
                        )}
                        rules={{
                            required: "Please agree to the terms of service",
                        }}
                    />
                    <label htmlFor="agree_to">
                        I agree to the Terms of Service
                    </label>
                    {errors.agree_to && (
                        <span className="error">{errors.agree_to.message}</span>
                    )}
                </section>
            </fieldset>
            <footer>
                <Button type="submit" variant="primary">
                    Submit
                </Button>
            </footer>
        </form>
    );
}
