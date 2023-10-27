import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  writeDataToFirestore,
  onIncrementCommentCount,
  getDataFromFirestore,
} from '../../firebase/firestore';
import { handleErrorAsyncOperation } from '../../helpers/handleErrorAsyncOperation';

const getPostCommentsOperation = createAsyncThunk('comments/getComments', async (postId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const comments = await getDataFromFirestore({ route: 'comments', field: 'postId', value: postId });
    return comments;
  }, thunkAPI);
});

const createComment = createAsyncThunk('comments/create', async (commentInfo, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const comment = await writeDataToFirestore('comments', commentInfo);
    await onIncrementCommentCount(commentInfo.postId, commentInfo.author);
    return comment;
  }, thunkAPI);
});

export { createComment, getPostCommentsOperation };
