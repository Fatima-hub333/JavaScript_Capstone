const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'GlABo33GV7jneHk7dokj';

const addComment = async (itemId, username, comment) => {
  let result;
  try {
    const res = await fetch(`${baseUrl}apps/${appId}/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

const getComments = async (itemId) => {
  let result;
  try {
    const res = await fetch(`${baseUrl}apps/${appId}/comments/?item_id=${itemId}`);
    result = await res.json();
  } catch (err) {
    return err;
  }
  return result;
};

export {
  addComment, getComments,
};