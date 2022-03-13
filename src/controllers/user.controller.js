import { use } from "express/lib/application";
import User from "../models/user";
import Role from "../models/user";

export const createUser = async ( req, res ) => {
    try {
        const { username, email, password, roles } = req.body;

        const rolesFound = await Role.find( { name: {$in:roles}});

        const user = new user ({
            username,
            email,
            password,
            roles: rolesFound.map((role) => role._id)
        });
        user.password = await User.encryptPassword(user.password);

        const savedUser = await user.save();

        
        return res.status(200).json({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            roles: savedUser.roles,
        });
    }
    catch (error){
        console.error(error);
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        return res.json(user);
    } catch (error) {
        res.json(error);
    }
};
  
export const getUsers = async (req, res) => {
    const userFound = await User.findById(req.params.id);

    if (!userFound) return res.status(204).json();

    return res.json(userFound);
};
  
export const deleteUsers = async (req, res) => {
    const userFound = await User.findByIdAndDelete(req.params.id);

    if (!userFound) return res.status(204).json();

    return res.status(204).json();
};

export const updateUser = async ( req, res) => {
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!userUpdated) return res.status(204).json();
    return res.json(userUpdated);
};