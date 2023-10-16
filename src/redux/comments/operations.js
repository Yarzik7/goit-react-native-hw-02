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
  try {
    const comment = await writeDataToFirestore('comments', commentInfo);
    await onIncrementCommentCount(commentInfo.postId);
    return comment;
  } catch (e) {
    const { status, message } = e.toJSON();
    return thunkAPI.rejectWithValue({ status, message });
  }
});

export { createComment, getPostCommentsOperation };
