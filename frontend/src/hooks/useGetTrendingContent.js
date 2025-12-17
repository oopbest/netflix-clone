import { useState, useEffect } from "react";
import axios from "axios";
import { useContentStore } from "../store/content";

const useGetTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      try {
        const response = await axios.get(`/api/v1/${contentType}/trending`);
        setTrendingContent(response.data.content);
      } catch (error) {
        console.error("Error fetching trending content:", error);
      }
    };
    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
};

export default useGetTrendingContent;
