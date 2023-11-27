import { useContext } from "react";
import { QuizDataContext } from "../contexts/QuizDataContext";

export const useQuizDataContext = () => {
    const context = useContext(QuizDataContext)
    
    if (!context) {
        throw new Error('useQuizDataContext must be used within a QuizDataProvider');
      }
      return context
}