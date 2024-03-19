import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/User.Models.js";
import { apierror } from "../utils/apierror.js";

const addComment = asyncHandler(async (req, res) => {
  // Extract necessary information from the request body
  const {message} = req.body

  // Find the current user using their ID
  const currUser = await User.findById(req.coockies?._id);
  if (!currUser) {
    throw new apierror(401, "CurrentUser not found");
  }

  // Create a new comment object
  const newComment = {
    message : message,
  };

  try {
    // Add the new comment to the user's community array
    currUser.community.push(newComment);

    // Save the updated user document
    await currUser.save();

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      owner: currUser,
    });
  } catch (error) {
    throw new apierror(500, "Unable to add comment", error);
  }
})

export { addComment };
