
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
  export const  ButtonBar = (totalPages,setPages) => {
    
    const handlePrev = () => {
        if (totalPages > 1) {
            setPages((prev) => prev - 1);
        
        }
      };
    
      const handleNext = () => {
        if (totalPages) {
            setPages((prev) => prev + 1);
    
        }
      };
  return (
    <>
    <div className='flex mx-auto'>
    <Button variant="outline" size="icon" onClick={handlePrev}>
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <p>{totalPages}</p>
    <Button variant="outline" size="icon" onClick={handleNext}>
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
  </>
  )
}

