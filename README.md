# Income Tax Rates in Kenya(old and new rates)
----------------------------------------------------------------------------------------------------
Planning for you taxes can be stressful both as an employer and employee. That is why we came up with this online income tax calculator to help you do your monthly taxes for you without the stress of so much math.
This is a basic Income tax calculator with functionality that allows you to calculate your monthly taxes using the old rates and new rates to be effected on January 2017.
The most basic variables are considered to calculate income tax and they include: 
 - PAYE
 - NSSF
 - NHIF
 - GrossIncome

# BDD
The Specifications using old nssf rates and variables to consider include:

| Behavior | Input Example | Output Example(old nssf rates) | Output Example(new nssf rates) |
| ---------| ------------- | ------------------------------ | ------------------------------ |
| nssf is a constant of 200 for old rate and 6% of gross with a max of 1080 for new rates | 53,000 | 200 | 1,080 |
| nhif is a value based on your gross income bracket | 53,000 | 1,200 | 1,200 |
| personal relief is a constant for anyone liable to pay taxes | 53,000 | 1,162  | 1,162 |
| taxable pay is grossIncome less  deductions(nssf) | 53,000 | 52,800 | 51,920 |
| paye is the taxable pay less personal relief | 53,000 | 9,772 | 9,508.10 |
| netpay is a function of nhif, nssf,paye and grossIncome | 53,000 | 41,828 | 41,121.1 |
| effective tax rate is a function of paye and grossIncome | 53,000 | 18.44% | 17.94% |

## Features
It is built using HTML and CSS; Bootstrap; JavaScript and jQuery.


### Contributor
 - Shalom Waiganjo