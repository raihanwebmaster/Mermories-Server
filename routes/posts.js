
import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost, commentPost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

export default router;


// import { getPosts, getPostsBySearch, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
// import auth from  '../middleware/auth.js';
// const router = express.Router();

// router.get('/', getPosts);
// router.get('/search', getPostsBySearch)
// router.post('/', auth, createPost);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

// export default router;