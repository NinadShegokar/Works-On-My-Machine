from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import sys
import json
from final_code import solve_competitive_programming_problem

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only - restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Question(BaseModel):
    text: str

@app.post("/solve")
async def solve_problem(question: Question):
    try:
        # Call the solver function
        results = solve_competitive_programming_problem(question.text)
        
        # Format the response
        formatted_results = []
        for result in results:
            formatted_results.append({
                'approach_index': result['approach_index'],
                'analysis': result['analysis'],
                'solution_plan': result['solution_plan'],
                'final_solution': result['final_solution']
            })
            
        return {"status": "success", "results": formatted_results}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)