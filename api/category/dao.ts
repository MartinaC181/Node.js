import Category from "./model";

const CategoryDao = {
    async getAllCategories(){
        try {
        const categories = await Category.find();
        return categories;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async getCategoryById(categoryId: string) {
        try {
        const category = await Category.findById(categoryId);
        return category;
        
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async createCategory(category: { name: string; description: string }) {
        try {
        const newCategory = await Category.create(category);
        return newCategory;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async editCategory(
        categoryId: string,
        category: { name: string; description: string }
    ) {
        try {
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            category,
            { new: true }
        );
        return updatedCategory;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async deleteCategory(categoryId: string) {
        try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        return deletedCategory;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
};

export const categoryDao = CategoryDao;
