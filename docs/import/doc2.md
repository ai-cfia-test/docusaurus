---
id: doc2
title: Risk Score
sidebar_label: Risk Score

---

  
African Swine Fever (ASF) is a disease of domestic pigs classified in the family Iridoviridae. Over the past couple of years, the global spread of ASF has been gaining momentum and wreaking havoc on the pork industry of the affected countries. The current situation poses a serious risk of ASF introduction into Canada via the import shipment stream. As Canada is the third-largest pork exporting country and represents about $20\%$ of the world pork trade, ASF could lead to severe economic repercussions. This study proposes an approach for assessing the risk of introducing ASF into Canada by analyzing fraudulent pork meat products in shipping data. The purpose of the designed tool is to identify the risk level of import shipments that may contain undeclared or fraudulent products that pose a risk of carrying the ASF virus.

The risk score for each shipment is computed based on three identified risk parameters: harmonized system (HS) codes that do not require CFIA approval for release (machine/auto approved) at import and therefore more likely to be used to bypass Canadian import requirements; animal health status of country of origin and mode of import (port of entry). Each parameter is given a score ranging between $1$ and $5$. The final risk score consists of the product of these parameters and thus ranges between $1$ and $125$ as follows 

\begin{equation}
\text{Risk Score} = \text{HS Code} \times \text{Country of Origin} \times \text{Port of Entry}
\end{equation}
