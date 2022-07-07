const getGoals = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}
const setGoals = (req,res) => {
    res.status(200).json({message: 'SetGoal'})
}
const updateGoals = (req,res) => {
    res.status(200).json({message: 'Update Goal '})
}
const deleteGoals = (req,res) => {
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
}


module.exports = {
    getGoals, setGoals, updateGoals,deleteGoals
}