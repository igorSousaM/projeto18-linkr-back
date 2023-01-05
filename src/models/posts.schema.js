import joi from 'joi'

const postPostsSchema = joi.object({
    link: joi.string().required(),
    text: joi.string().required()
});

export default postPostsSchema;