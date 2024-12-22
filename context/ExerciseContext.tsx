import { useState } from "react";
import { createContext } from "react";

export const ExerciseContext = createContext({
  bookmarks: [],
  addToBookmarks: (exercise: any) => {},
});

export function ExerciseProvider({ children }: any) {
  const [bookmarks, setBookmarks] = useState<any>([]);

  const addToBookmarks = (exercise: any) => {
    const found = bookmarks.find((item: any) => item.id === exercise.id);
    if (!found) {
      setBookmarks([...bookmarks, { ...exercise, isMarked: true }]);
    } else {
      setBookmarks([...bookmarks, { ...exercise, isMarked: false }]);
      const filtered = bookmarks.filter((i: any) => i.id !== exercise.id);
      setBookmarks(filtered);
    }
  };

  return (
    <ExerciseContext.Provider value={{ bookmarks, addToBookmarks }}>
      {children}
    </ExerciseContext.Provider>
  );
}
