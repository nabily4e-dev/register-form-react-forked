import "./Form.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Checkbox, Button } from "@mui/material";

// import {
//     FormContainer,
//     Fieldset,
//     Legend,
//     Section,
//     Input,
//     Tooltip,
//     Icon,
//     Checkbox,
//     FormButton,
// } from "./FormStyles";

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

// const useStyles = makeStyles((theme) => ({
//     form: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//     },
//     fieldset: {
//         border: "none",
//         padding: 0,
//         margin: `${theme.spacing(3)}px 0`,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//     },
//     section: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         marginBottom: theme.spacing(2),
//     },
//     col: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "50%",
//     },
//     checkbox: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     submit: {
//         marginTop: theme.spacing(3),
//     },
// }));

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
        // <FormContainer onSubmit={handleSubmit(onSubmit)}>
        //     <Fieldset>
        //         <Legend>Register</Legend>
        //         <Section>
        //             <label htmlFor="username">
        //                 Username
        //                 <Tooltip>Enter your desired username</Tooltip>
        //                 {errors.username && (
        //                     <Icon className="fas fa-exclamation-circle" />
        //                 )}
        //             </label>
        //             <Input
        //                 type="text"
        //                 id="username"
        //                 {...register("username")}
        //             />
        //             {errors.username && (
        //                 <span>{errors.username.message}</span>
        //             )}
        //         </Section>
        //         <Section>
        //             <label htmlFor="email">
        //                 Email
        //                 <Tooltip>Enter your email address</Tooltip>
        //                 {errors.email && (
        //                     <Icon className="fas fa-exclamation-circle" />
        //                 )}
        //             </label>
        //             <Input type="email" id="email" {...register("email")} />
        //             {errors.email && <span>{errors.email.message}</span>}
        //         </Section>
        //         <Section>
        //             <label htmlFor="password">
        //                 Password
        //                 <Tooltip>Enter your password</Tooltip>
        //                 {errors.password && (
        //                     <Icon className="fas fa-exclamation-circle" />
        //                 )}
        //             </label>
        //             <Input
        //                 type="password"
        //                 id="password"
        //                 {...register("password")}
        //             />
        //             {errors.password && (
        //                 <span>{errors.password.message}</span>
        //             )}
        //         </Section>
        //         <Section>
        //             <label htmlFor="confirmPassword">
        //                 Confirm Password
        //                 <Tooltip>Confirm your password</Tooltip>
        //                 {errors.confirmPassword && (
        //                     <Icon className="fas fa-exclamation-circle" />
        //                 )}
        //             </label>
        //             <Input
        //                 type="password"
        //                 id="confirmPassword"
        //                 {...register("confirmPassword")}
        //             />
        //             {errors.confirmPassword && (
        //                 <span>{errors.confirmPassword.message}</span>
        //             )}
        //         </Section>
        //         <Section>
        //             <label htmlFor="firstName">
        //                 First Name
        //                 <Tooltip>Enter your first name</Tooltip>
        //                 {errors.firstName && (
        //                     <Icon className="fas fa-exclamation-circle" />
        //                 )}
        //             </label>
        //             <Input
        //                 type="text"
        //                 id="firstName"
        //                 {...register("firstName")}
        //             />
        //             {errors.firstName && (
        //                 <span>{errors.firstName.message}</span>
        //             )}
        //         </Section>
        //         <Section>
        //             <label htmlFor="lastName">
        //                 Last Name
        //                 <Tooltip>Enter your last name</Tooltip>
        //                 {errors.lastName && (
        //                     <Icon className="fas fa-exclamation-circle" />
        //                 )}
        //             </label>
        //             <Input
        //                 type="text"
        //                 id="lastName"
        //                 {...register("lastName")}
        //             />
        //             {errors.lastName && (
        //                 <span>{errors.lastName.message}</span>
        //             )}
        //         </Section>
        //         <Section>
        //             <Checkbox>
        //                 <input
        //                     type="checkbox"
        //                     id="checkbox"
        //                     {...register("checkbox")}
        //                 />
        //                 <span>
        //                     I agree to the terms and conditions
        //                     {errors.checkbox && (
        //                         <Icon className="fas fa-exclamation-circle" />
        //                     )}
        //                 </span>
        //             </Checkbox>
        //             {errors.checkbox && (
        //                 <span>{errors.checkbox.message}</span>
        //             )}
        //         </Section>
        //         <FormButton type="submit">Submit</FormButton>
        //     </Fieldset>
        // </FormContainer>

        // <form className="sky-form" onSubmit={handleSubmit(onSubmit)}>
        //     <header>Registration form</header>
        //     <fieldset>
        //         <section>
        //             <label className="input">
        //                 <i className="icon-append icon-user"></i>
        //                 <input
        //                     type="text"
        //                     placeholder="Username"
        //                     {...register("username")}
        //                 />
        //                 <b className="tooltip tooltip-bottom-right">
        //                     Only latin characters and numbers
        //                 </b>
        //             </label>
        //             {errors.username && (
        //                 <p className="error">{errors.username.message}</p>
        //             )}
        //         </section>

        //         <section>
        //             <label className="input">
        //                 <i className="icon-append icon-envelope-alt"></i>
        //                 <input
        //                     type="text"
        //                     placeholder="Email address"
        //                     {...register("email")}
        //                 />
        //                 <b className="tooltip tooltip-bottom-right">
        //                     Needed to verify your account
        //                 </b>
        //             </label>
        //             {errors.email && (
        //                 <p className="error">{errors.email.message}</p>
        //             )}
        //         </section>

        //         <section>
        //             <label className="input">
        //                 <i className="icon-append icon-lock"></i>
        //                 <input
        //                     type="password"
        //                     placeholder="Password"
        //                     {...register("password")}
        //                 />
        //                 <b className="tooltip tooltip-bottom-right">
        //                     Only latin characters and numbers
        //                 </b>
        //             </label>
        //             {errors.password && (
        //                 <p className="error">{errors.password.message}</p>
        //             )}
        //         </section>

        //         <section>
        //             <label className="input">
        //                 <i className="icon-append icon-lock"></i>
        //                 <input
        //                     type="password"
        //                     placeholder="Confirm password"
        //                     {...register("confirmPassword")}
        //                 />
        //                 <b className="tooltip tooltip-bottom-right">
        //                     Only latin characters and numbers
        //                 </b>
        //             </label>
        //             {errors.confirmPassword && (
        //                 <p className="error">
        //                     {errors.confirmPassword.message}
        //                 </p>
        //             )}
        //         </section>
        //     </fieldset>

        //     <fieldset>
        //         <div className="row">
        //             <section className="col col-6">
        //                 <label className="input">
        //                     <input
        //                         type="text"
        //                         placeholder="First name"
        //                         {...register("firstName")}
        //                     />
        //                 </label>
        //             </section>
        //             <section className="col col-6">
        //                 <label className="input">
        //                     <input
        //                         type="text"
        //                         placeholder="Last name"
        //                         {...register("lastName")}
        //                     />
        //                 </label>
        //             </section>
        //         </div>

        //         <section>
        //             <label className="checkbox">
        //                 <input type="checkbox" {...register("agreeToTerms")} />
        //                 <i></i>I agree to the Terms of Service
        //             </label>
        //             {errors.agreeToTerms && (
        //                 <p className="error">{errors.agreeToTerms.message}</p>
        //             )}
        //         </section>
        //     </fieldset>
        //     <footer>
        //         <button type="submit" className="button">
        //             Submit
        //         </button>
        //     </footer>
        // </form>

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
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </footer>
        </form>
    );
}
