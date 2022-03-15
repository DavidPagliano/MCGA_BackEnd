import Plans from "../models/plans";

export const createPlan = async (req, res) => {
  const { Plan, Description, Price } = req.body;

  try {
    const newPlan = new Plans({
      Plan,
      Description,
      Price,
    });

    const planSaved = await newPlan.save();

    res.status(201).json(planSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPlanById = async (req, res) => {
  const { planId } = req.params;

  const plan = await Plans.findById(planId);
  res.status(200).json(plan);
};

export const getPlan = async (req, res) => {
  const products = await Plans.find();
  return res.json(products);
};

export const updatePlanById = async (req, res) => {
  const updatedProduct = await Plans.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedProduct);
};

export const deletePlanById = async (req, res) => {
  const { productId } = req.params;

  await Plans.findByIdAndDelete(productId);

  // code 200 is ok too
  res.status(204).json();
};