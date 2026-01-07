'use client'
import {useForm} from "react-hook-form";
import {Form} from "lucide-react";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {error} from "next/dist/build/output/log";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";


const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    })
    const onSubmit= async (data: SignInFormData) => {
        try {
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h1 className={'form-title'}>Sign  In To Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={'space-y-5'}>
                {/*    Inputs */}
                <InputField
                    name={'email'}
                    label={'Email'}
                    placeholder={'johndoe@email.com'}
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email address is invalid' }}
                />

                <InputField
                    name={'password'}
                    label={'Password'}
                    placeholder={'Enter your password'}
                    type={'password'}
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />

                <Button type={'submit'} disabled={isSubmitting} className={'yellow-btn w-full mt-5'}>
                    {isSubmitting ? 'Signing In' : 'Sign In'}
                </Button>

                <FooterLink text={"Don't have an account?"} linkText={'Sign Up'} href={'/sign-up'} />
            </form>
        </>
    )
}
export default SignIn
