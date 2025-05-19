import React, { useState } from 'react'
import service from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { PostCard, PostForm, Container } from '../components/index'

function AllPosts() {
    const [posts, setPosts] = useState([])
    service.getPosts([]).then((posts) => {
        if (posts){
            setPosts(posts)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container >
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/2'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts