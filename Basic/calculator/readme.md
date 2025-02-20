# Instead of eval custom eval :

## Tokens: ["3", "+", "5", "*", "2"]

Step 1: Read "3" → Move to outputQueue
OutputQueue: [3]
OperatorStack: []

Step 2: Read "+" → Push to operatorStack
OutputQueue: [3]
OperatorStack: ["+"]

Step 3: Read "5" → Move to outputQueue
OutputQueue: [3, 5]
OperatorStack: ["+"]

Step 4: Read "_" → Push to operatorStack (_ has higher precedence than +)
OutputQueue: [3, 5]
OperatorStack: ["+", "*"]

Step 5: Read "2" → Move to outputQueue
OutputQueue: [3, 5, 2]
OperatorStack: ["+", "*"]

Step 6: End of tokens → Pop operators to outputQueue
OutputQueue: [3, 5, 2, "*"]
OperatorStack: ["+"]

OutputQueue: [3, 5, 2, "*", "+"]
OperatorStack: []

# 1️⃣ tokenize(expression) → Splits the math expression into numbers and operators.

Example: "3+5*2" → ["3", "+", "5", "*", "2"]

# 2️⃣ infixToPostfix(tokens) → Converts infix (normal math) to postfix (RPN).

Example: ["3", "+", "5", "*", "2"] → ["3", "5", "2", "*", "+"]
Uses a stack to rearrange operators based on precedence.

# 3️⃣ evaluatePostfix(postfix) → Computes the final result from postfix notation.

Example: ["3", "5", "2", "*", "+"] → 3 + (5 \* 2) = 13
Uses a stack to process numbers and operators step by step.
