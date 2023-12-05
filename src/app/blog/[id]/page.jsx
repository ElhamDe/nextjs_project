import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if(!res.ok) {
    return notFound();
  }

  return res.json();
}


const BlogPost = async ({params}) => {

  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nihil, aperiam hic minima excepturi officiis, aut suscipit commodi quibusdam molestiae quo, animi id molestias ipsam facere eaque maiores delectus. Saepe ipsam veniam aut! Labore, atque quod ducimus molestias magnam culpa!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/18111290/pexels-photo-18111290/free-photo-of-ornamented-wall-of-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Elham Dermaku</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/18111290/pexels-photo-18111290/free-photo-of-ornamented-wall-of-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill={true}
              className={styles.image}
            />
            <span className={styles.username}>Elham Dermaku</span>
          </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni tenetur quaerat at iure ipsa, asperiores aliquam, sunt optio ipsam nisi possimus ad nulla, corporis sapiente est voluptate voluptatum deserunt eaque iste numquam iusto. Esse sequi repudiandae cum excepturi omnis assumenda dolorem dicta voluptas iure quia aliquid, perferendis ab amet.
        </p>
      </div>
    </div>
  )
}

export default BlogPost;