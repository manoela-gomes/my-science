import os
import openai
import sys

openai.api_key = "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"
age= sys.argv[1]
gender= sys.argv[2]
ethnicity= sys.argv[3]
arts= sys.argv[4]
colour= sys.argv[5]
text= sys.argv[6]

response = openai.Completion.create(
  model="text-davinci-002",
  prompt="Summarize this for a second-grade student:\n\n" +text,
  temperature=0.7,
  max_tokens=64,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
)
print(response)

