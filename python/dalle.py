from dalle2 import Dalle2
import openai
import sys

dalle = Dalle2('sess-Ck8LKXnojnNs06VtFIeiXGmENBHl56lZBNsD92l3')

age= sys.argv[1]
gender= sys.argv[2]
ethnicity= sys.argv[3]
arts= sys.argv[4]
colour= sys.argv[5]
text= sys.argv[6]

generations = dalle.generate(text+" painted like "+arts+" by "+ethnicity+" "+gender+" "+age+" years old painter")



print(generations)

#"A Brain Cancer Detection and Classification System has been designed and developed. The system uses computer based procedures to detect tumor blocks or lesions and classify the type of tumor using Artificial Neural Network in MRI images of different patients with Astrocytoma type of brain tumors, digital art"
#se quiser achar o token, tem que ir em inspecionar, fetch >> task>> token bearer
#sess-Ck8LKXnojnNs06VtFIeiXGmENBHl56lZBNsD92l3
#os ciclanos