# Competitive Programming Code Generation
## INHERITANCE'25

## Overview
This project introduces a robust, multi-agent system designed to analyze and solve competitive programming (CP) problems while generating comprehensive and edge-case test cases. With a curated database of over **450+ competitive programming problems**, the framework captures detailed problem descriptions, constraints, examples, and solution strategies across various complexity levels, including brute force, intermediate, and optimal approaches.

By constructing a dynamic knowledge graph and utilizing Graph-RAG (Retrieval-Augmented Generation), the system retrieves and synthesizes problem insights to develop efficient solution pipelines. Through agent collaboration, it automates the problem-solving process from analysis to code generation.

## System Architecture
### Problem Database
- **Extensive Dataset:** Over 450 CP problems with well-structured information, including solution approaches and executable code.
- **Detailed Insights:** Comprehensive problem-solving steps enhance solution retrieval and validation.

### Knowledge Graph Integration
- **Dynamic Knowledge Graph:** Captures relationships between problem attributes and solution patterns for intelligent retrieval.
- **Graph-RAG Integration:** Powers efficient and insightful problem-solving through structured knowledge retrieval.

### Agent Framework
- **Analysis Agent:** Breaks down user-provided CP problems, identifying key constraints and objectives.
- **Planning Agent:** Develops structured solution strategies, algorithms, and pseudocode.
- **Coding Agent:** Translates pseudocode into fully executable and optimized code solutions.
- **Test Case Agent:** Automatically generates diverse test cases, including edge cases, for solution validation.

## Technical Workflow
1. **Problem Analysis:** The Analysis Agent dissects the problem statement to extract critical constraints.
2. **Knowledge Retrieval:** Graph-RAG is leveraged to retrieve analogous problem insights.
3. **Solution Planning:** The Planning Agent formulates algorithmic strategies and detailed pseudocode.
4. **Code Generation:** The Coding Agent converts pseudocode into an optimized, executable solution.
5. **Test Case Creation:** The Test Case Agent produces diverse and comprehensive test scenarios.
6. **Solution Deployment:** Outputs a validated and efficient solution ready for testing.

## Key Features
- **Scalable Knowledge Integration:** Continuously learns and adapts as new problems are added.
- **Agent Collaboration:** Distributed architecture ensures task specialization and parallel processing.
- **Comprehensive Test Generation:** Robust testing guarantees solution reliability.
- **Knowledge-Driven Problem Solving:** Intelligent retrieval of patterns for algorithm development.
- **Modular and Extensible:** Supports future integration with other platforms.
