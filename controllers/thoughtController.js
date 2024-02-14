const {Thought, User} = require('../models');

module.exports = {

getAllThoughts(req,res) {
    Thought.find({})
    .populate({path: 'reactions', select: '-__v'})
    .select('-__v')
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
},

    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.id})
            .select('-__v')
            .then((singleThought) =>
                !singleThought
                    ? res.status(404).json({message: 'Error: User ID not found'})
                    : res.json(singleThought)
            )
            .catch((err) => res.status(500).json(err));
    },

addThought(req, res) {
    Thought.create(req.body)
    .then((dbThoughtData) => {
        return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: {thoughts: dbThoughtData._id } },
            { new: true }
        );
    })
},

updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {
        new: true, 
        runValidators: true,
    })
    .then((dbThoughData) => {
        if (!dbThoughData) {
            res.status(404).json({ message: "No thought found with this id!"});
            return;
        }
        res.json(dbThoughData);
    })
    .catch((err) => res.status(400).json(err));
},

deleteThought(req, res) {
    Thought.findOneAndDelete ({ _id: req.params.id})
        .then((deleteThought) =>
            !deleteThought
                ? res.status(404).json({message: 'Error: User ID not found'})
                : User.findOneAndUpdate(
                        {thoughts: req.params.id},
                        {$pull: {thoughts: req.params.id}},
                        {runValidators: true, new: true}
                )
        )
        .then((user) => 
            !user
                ? res.status(404).json({message: 'Error: User ID not found'})
                : res.json ({message: "Success! User and user thoughts deleted"})
        )
        .catch((err) => res.status(500).json(err));      
},

addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $addToSet: { reactions: body } },
        { new: true, runValidators: true }
    )
    .then((dbThoughData) => {
        if (!dbThoughData) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
        }
        res.json(dbThoughData);
    }).catch((err) => res.json(err));
},

    removeReaction(req, res) {
        Thought.findOneAndDelete (
            { _id: req.params.id},
            { $pull: {reactions: req.params.reactionId}},
            { runValidators: true, new: true }
        )
            .then((remReaction) =>
                !remReaction
                    ? res.status(404).json({message: 'Error: User ID not found'})
                    : res.json(remReaction)
            )
            .catch((err) => res.status(500).json(err))
    },
};