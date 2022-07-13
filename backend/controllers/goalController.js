const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel') 

//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async(req,res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
     
       res.status(400).json({message: 'please add a text field'})
       throw new console.error('please add a text field');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

//@desc update goals
//@route PUT /api/goals/:id
//@acces private
const updateGoals = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})



    res.status(200).json(updateGoal)
})

//@desc delete goal
//@route DELETE /api/goals/:id
//@acces private
const deleteGoals = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})


module.exports = {
    getGoals, setGoals, updateGoals,deleteGoals
}