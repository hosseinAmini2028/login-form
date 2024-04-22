'use client';
import Button from 'components/Button';
import PasswordInput from 'components/PasswordInput';
import TextInput from 'components/TextInput';
import { userSlice } from 'lib/store/slices/userSlice';
import { useDispatch } from 'lib/store/store';
import { FormProvider, useForm } from 'react-hook-form';
import { useUserLoginMutation } from 'services/auth';

export default function LoginForm() {
  const methods = useForm();
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const dispatch = useDispatch();
  const handleLogin = async (data: any) => {
    try {
      const res : any = await userLogin({ ...data });
      if(!res.error){
          const {
            fullname,
            gender,
            id,
            phone,
            picture,
            role,
            username
        } = res.data.user;
          dispatch(userSlice.actions.userLogin({
            token : res.data.Token,
            userInfo : {
                fullname,
                gender,
                id,
                phone,
                picture,
                role,
                username
            }
          }))

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleLogin)}>
          <TextInput name="username" required label="username" placeholder="Enter username" />
          <PasswordInput name="password" required label="password" placeholder="password" />
          <Button type="submit">{isLoading ? 'Loading...' : 'Sign In'}</Button>
        </form>
      </FormProvider>
    </div>
  );
}
