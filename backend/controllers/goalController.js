const asyncHandler = require('express-async-handler')

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get Goals'})
})

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
     
       res.status(400).json({message: 'please add a text field'})
       throw new console.error('please add a text field');
    }

    res.status(200).json({message: 'SetGoal'})
})

//@desc update goals
//@route PUT /api/goals/:id
//@acces private
const updateGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Update Goal '})
})

//@desc delete goal
//@route DELETE /api/goals/:id
//@acces private
const deleteGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})


module.exports = {
    getGoals, setGoals, updateGoals,deleteGoals
}