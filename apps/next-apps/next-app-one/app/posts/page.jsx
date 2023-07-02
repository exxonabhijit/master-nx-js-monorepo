import React from 'react';
import { supabase } from '../services/supabase/initSupabase';

async function Posts() {
   
let { data: posts, error } = await supabase
.from('posts')
.select('title')


  console.log('posts', posts);

  return <div>posts page</div>;
}

export default Posts;
