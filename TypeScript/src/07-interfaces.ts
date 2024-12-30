// interfaces
interface Author {
   name: string;
   avatar: string;
}

const authorOne: Author = { name: 'Harsh', avatar: './img/avatar.png' };

console.log(authorOne);

interface Post {
   title: string;
   body: string;
   tags: string[];
   createdAt: Date;
   author: Author;
}

const newPost: Post = {
   title: 'Tithe of Post',
   body: 'Body of Post',
   tags: ['technology', 'coding'],
   createdAt: new Date(),
   author: authorOne,
};

console.log(newPost);

// interfaces as function argument types
function createPost(post: Post) {
   console.log(`Created post '${post.title}' by ${post.author.name}`);
}

createPost(newPost);

// interfaces with arrays
const posts: Post[] = [];
posts.push(newPost);

console.log(posts);
