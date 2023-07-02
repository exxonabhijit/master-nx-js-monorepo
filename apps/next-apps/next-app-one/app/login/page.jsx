import React from 'react';
import { supabase } from '../services/supabase/initSupabase';

async function LoginPage() {
  let { data } = await supabase.auth.signUp({
    email: 'abhijitmhatre11223344@gmail.com',
    password: '11223344',
  });

  console.log('login data', data);
  return (
    <>
      <h1>Login Page</h1>
    </>
  );
}

export default LoginPage;
