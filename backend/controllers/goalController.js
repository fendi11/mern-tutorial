//@desc Get Goals
//@route GET /api/goals
//@access Private
const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}

//@desc Set Goals
//@route POST /api/goals
//@access Private
const setGoals = (req,res) => {
    res.status(200).json({message: 'SetGoal'})
}

//@desc update goals
//@route PUT /api/goals/:id
//@acces private
const updateGoals = (req,res) => {
    res.status(200).json({message: 'Update Goal '})
}

//@desc delete goal
//@route DELETE /api/goals/:id
//@acces private
const deleteGoals = (req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
}


module.exports = {
    getGoals, setGoals, updateGoals,deleteGoals
}