import { EHRResourceIdentifier, FHIRVersion, ProcessingState, ResourceWrapper } from "@/utils/types";

export const patientIdentifiers: EHRResourceIdentifier[] = [
  {
    key: "1",
    uid: "1",
    patientId: "1"
  },
  {
    key: "2",
    uid: "2",
    patientId: "2"
  },
  {
    key: "3",
    uid: "3",
    patientId: "3"
  },
];
 
export const resources: ResourceWrapper[] = [
  // Patient One
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_COMPLETED,
        createdTime: new Date("05 October 2011 14:48 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:49 UTC").toISOString(),
        processedTime: new Date("05 October 2011 14:52 UTC").toISOString(),
        identifier: patientIdentifiers[0],
        resourceType: "H&P",
        version: FHIRVersion.FHIR_VERSION_UNSPECIFIED
      },
      humanReadableStr: "HISTORY & PHYSICAL (H&P)\n\nPatient Name: John Doe\nMRN: 123456789\nDOB: 08/15/1965\nAge: 59\nSex: Male\nDate of Service: 05/24/2025\nAttending Physician: Dr. Smith\nConsulting Services: Neurosurgery, Oncology\n\nChief Complaint:\nWorsening headaches and new-onset left-sided weakness.\n\nHistory of Present Illness:\nMr. John Doe is a 59-year-old right-handed male with no significant past neurological history who presents with a 3-week history of progressively worsening headaches, described as dull and constant, predominantly frontal, associated with early morning nausea. Over the past 5 days, he developed left-sided arm and leg weakness and subtle word-finding difficulty. No seizures, visual changes, or loss of consciousness reported.\n\nA head CT obtained at an outside ED revealed a right frontal lobe mass with surrounding vasogenic edema and midline shift. MRI with contrast showed a heterogeneously enhancing right frontal mass, approximately 5.1 x 4.2 x 3.8 cm, with central necrosis and significant mass effect. He was transferred for further evaluation.\n\nPast Medical History:\n- Hypertension\n- Hyperlipidemia\n\nPast Surgical History:\n- Appendectomy (1985)\n- Cholecystectomy (2012)\n\nMedications:\n- Lisinopril 20 mg daily\n- Atorvastatin 40 mg daily\n- Dexamethasone 4 mg q6h (started in ED)\n- Levetiracetam 500 mg BID (started in ED)\n\nAllergies:\n- NKDA\n\nFamily History:\n- Father: Deceased, myocardial infarction, age 67\n- Mother: Alive, 84, HTN, Alzheimer’s\n- No known familial cancer syndromes\n\nSocial History:\n- Former smoker, 20 pack-years, quit 10 years ago\n- Rare alcohol use\n- Lives with spouse\n- Retired accountant\n\nReview of Systems:\n- General: Fatigue, unintentional weight loss (~8 lbs in last month)\n- Neuro: Headache, left-sided weakness, mild aphasia\n- GI: Nausea, no vomiting\n- All other systems reviewed and negative\n\nPhysical Exam:\nVitals: T 98.6 °F | HR 84 | BP 138/82 | RR 14 | SpO₂ 98% RA\nGeneral: Alert, cooperative, no acute distress\nHEENT: Normocephalic, pupils equal/reactive\nNeuro:\n- Mental status: Alert, mildly slowed speech, intact comprehension\n- Cranial nerves: II–XII grossly intact\n- Motor: 4-/5 strength in LUE and LLE, 5/5 on right\n- Sensory: Decreased light touch on left side\n- Reflexes: 2+ throughout\n- Gait: Not assessed due to weakness\nCardio/Resp/Pulm/Abd: Normal\n\nImaging:\n- MRI Brain w/ contrast: Right frontal lobe ring-enhancing lesion with central necrosis, surrounding edema, 6 mm right-to-left midline shift\n- CT Chest/Abd/Pelvis: No evidence of primary tumor or metastasis\n\nAssessment:\n59-year-old male with new-onset neurological deficits and imaging concerning for high-grade primary brain tumor, most likely glioblastoma (WHO Grade IV).\n\nPlan:\n1. Neurosurgery – Scheduled for craniotomy and tumor resection tomorrow morning.\n2. Dexamethasone – Continue 4 mg IV q6h for cerebral edema\n3. Anticonvulsants – Continue levetiracetam, monitor for seizures\n4. Pathology – Await biopsy/resection for definitive diagnosis\n5. Neuro-Oncology – Consult placed for post-operative planning (radiation + temozolomide)\n6. Palliative Care – Discuss goals of care post-surgery\n7. Labs – CBC, CMP daily\n8. Family Meeting – Scheduled with neurosurgery and oncology teams\n\n---\n\n",
      aiSummary: "John Doe is a 62-year-old male who presented with new-onset seizures and progressive left-sided weakness. MRI revealed a 5.2 cm right frontal lobe mass with necrosis and midline shift, consistent with suspected glioblastoma. Past history includes hypertension and hyperlipidemia. Started on dexamethasone and levetiracetam. Craniotomy planned; pathology and oncology consult pending."
    },
  },
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_UNSPECIFIED,
        createdTime: new Date("05 October 2011 14:50 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:51 UTC").toISOString(),
        identifier: patientIdentifiers[0],
        resourceType: "Progress Note",
        version: FHIRVersion.FHIR_VERSION_UNSPECIFIED
      },
      humanReadableStr: "PROGRESS NOTE (Post-Op Day #1)\n\nDate: 05/24/2025\nPost-op Day: 1\nProcedure: Right frontal craniotomy with gross total resection of tumor\nSurgeon: Dr. Smith\n\nSubjective:\nPatient awake and alert. Reports improved headache. Family at bedside. No new complaints. Appetite limited but tolerating clear liquids. No seizures or new focal deficits.\n\nObjective:\nVitals: Stable, afebrile\nNeuro Exam:\n- Mental status: Awake, oriented x3, speech mildly slowed\n- Motor: 4-/5 strength LUE and LLE\n- No new deficits\nWound: Clean, dry, intact\nLabs:\n- WBC 9.1, Hgb 13.4, Plt 218\n- Na 138, K 3.9, Cr 0.92\nPathology: Preliminary frozen section consistent with glioblastoma multiforme (GBM). Awaiting final report.\n\nAssessment:\nPost-op day #1 s/p gross total resection of right frontal GBM. Neurologically stable with no new deficits. Preliminary pathology confirms high-grade glioma.\n\nPlan:\n1. Continue Dexamethasone, taper over the next week\n2. Continue Levetiracetam – no signs of seizure\n3. Pain management – acetaminophen, oxycodone PRN\n4. Await final pathology\n5. Arrange outpatient follow-up with neuro-oncology for chemoradiation\n6. Rehabilitation referral – PT/OT to assess for discharge planning\n7. Discharge goal – POD #3 if stable",
    },
  },
  // Patient Two
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_NOT_STARTED,
        createdTime: new Date("05 October 2011 14:55 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:56 UTC").toISOString(),
        identifier: patientIdentifiers[1],
        resourceType: "H&P",
        version: FHIRVersion.FHIR_VERSION_R4
      },
      humanReadableStr: "HISTORY & PHYSICAL (H&P)\n\nPatient Name: Jane Smith\nMRN: 987654321\nDOB: 04/10/1972\nAge: 53\nSex: Female\nDate of Service: 05/24/2025\nAttending Physician: Dr. Patel\nConsulting Services: Neurosurgery, Neuro-Oncology\n\nChief Complaint:\nProgressive confusion and right-sided weakness.\n\nHistory of Present Illness:\nMs. Jane Smith is a 53-year-old female with no known prior neurological conditions who presents with a 2-week history of increasing forgetfulness, personality changes, and decreased attention span. Over the past 4 days, her family noticed a right facial droop and weakness in the right arm and leg. She also had difficulty writing and occasionally used inappropriate words when speaking. No seizures, fever, or trauma reported.\n\nCT head at the local ED revealed a left temporoparietal mass with surrounding edema. MRI brain with contrast confirmed a 4.7 x 4.5 x 3.9 cm heterogeneously enhancing lesion with central necrosis and surrounding vasogenic edema causing 5 mm midline shift.\n\nPast Medical History:\n- Type 2 Diabetes Mellitus\n- Hypothyroidism\n\nPast Surgical History:\n- Total abdominal hysterectomy (for fibroids)\n\nMedications:\n- Metformin 500 mg BID\n- Levothyroxine 75 mcg daily\n- Dexamethasone 4 mg IV q6h (started in ED)\n- Levetiracetam 500 mg BID (started in ED)\n\nAllergies:\n- Penicillin (rash)\n\nFamily History:\n- Mother: Breast cancer at 62\n- Father: Stroke at 70\n- No known hereditary cancer syndromes\n\nSocial History:\n- Never smoker\n- Occasional wine use\n- Lives alone, daughter nearby\n- Works part-time as a librarian\n\nReview of Systems:\n- Neurologic: Confusion, word-finding difficulty, right-sided weakness\n- Constitutional: Fatigue\n- GI: Normal appetite, no nausea or vomiting\n- Endocrine: Known diabetes and hypothyroidism, medications compliant\n\nPhysical Exam:\nVitals: T 98.2 °F | HR 76 | BP 144/86 | RR 16 | SpO₂ 99% RA\nGeneral: Alert but inattentive\nNeuro:\n- Mental status: Oriented to person only, short-term memory impaired\n- Cranial Nerves: Mild right facial droop\n- Motor: 3+/5 right upper and lower extremities\n- Sensory: Decreased pinprick sensation on right side\n- Reflexes: 2+ left, 1+ right\n- Speech: Paraphasic errors, follows simple commands\nOther systems: Unremarkable\n\nImaging:\n- MRI Brain w/ contrast: Left temporoparietal lesion with ring enhancement, necrosis, 5 mm midline shift\n- No evidence of systemic malignancy on CT chest/abdomen/pelvis\n\nAssessment:\n53-year-old female with acute cognitive decline and focal neurological deficits. Imaging highly suggestive of high-grade glioma, likely glioblastoma.\n\nPlan:\n1. Neurosurgery – Craniotomy and tumor debulking scheduled for tomorrow\n2. Continue dexamethasone for cerebral edema\n3. Continue levetiracetam for seizure prophylaxis\n4. Pathology – Await histological confirmation post-resection\n5. Neuro-oncology consult for post-op radiation/chemotherapy planning\n6. Discuss goals of care with patient and daughter\n7. Monitor electrolytes, glucose, CBC daily\n8. Physical and speech therapy evaluation pre-op",
    },
  },
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_FAILED,
        createdTime: new Date("05 October 2011 14:57 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:58 UTC").toISOString(),
        identifier: patientIdentifiers[1],
        resourceType: "Progress Note",
        version: FHIRVersion.FHIR_VERSION_R4
      },
      humanReadableStr: "PROGRESS NOTE (Post-Op Day #2)\n\nDate: 05/24/2025\nPost-op Day: 2\nProcedure: Left temporoparietal craniotomy for tumor resection\nSurgeon: Dr. Patel\n\nSubjective:\nPatient is awake, intermittently confused, able to answer simple questions with prompting. Daughter at bedside and notes slight improvement in speech clarity. No new headaches or seizures.\n\nObjective:\nVitals: Stable; BP 138/82 | HR 72 | T 98.3 °F | SpO₂ 98% RA\nNeuro Exam:\n- Mental status: Alert, follows commands inconsistently\n- Speech: Fewer paraphasias, still needs prompting\n- Motor: 3+/5 strength RUE/RLE\n- Sensory: Intact on left, diminished on right\nWound: Surgical incision clean, dry, no erythema or drainage\nLabs:\n- WBC 10.2, Hgb 12.6, Platelets 234\n- Glucose 142, Na 137, K 4.1, Cr 0.89\nPathology: Preliminary diagnosis – glioblastoma multiforme (IDH-wildtype), WHO Grade IV. MGMT methylation pending.\n\nAssessment:\nPost-op day 2 following left temporoparietal craniotomy for GBM. Patient showing mild improvement in cognition and speech. No complications post-op. Awaiting final pathology and molecular markers.\n\nPlan:\n1. Continue dexamethasone, initiate taper tomorrow\n2. Continue levetiracetam 500 mg BID\n3. Monitor sodium and glucose due to steroid use and DM\n4. Begin inpatient rehab: PT and speech therapy started today\n5. Coordinate oncology planning – anticipate radiation + temozolomide\n6. Arrange family meeting for final pathology discussion\n7. Discharge planning: tentatively post-op day 5 if stable\n8. Follow up: neuro-oncology and neurosurgery outpatient in 1–2 weeks",
    },
  },
  // Patient Three
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_PROCESSING,
        createdTime: new Date("05 October 2011 14:59 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 15:00 UTC").toISOString(),
        identifier: patientIdentifiers[2],
        resourceType: "H&P",
        version: FHIRVersion.FHIR_VERSION_R4B
      },
      humanReadableStr: "HISTORY & PHYSICAL (H&P)\n\nPatient Name: Maria Lopez\nMRN: 567891234\nDOB: 09/02/1979\nAge: 45\nSex: Female\nDate of Service: 05/24/2025\nAttending Physician: Dr. Nguyen\nConsulting Services: Neurosurgery, Neuro-Oncology, Ophthalmology\n\nChief Complaint:\nSudden onset visual disturbances and headaches.\n\nHistory of Present Illness:\nMs. Maria Lopez is a 45-year-old woman with no significant past neurological or oncologic history who presents with a 1-week history of progressive visual changes. She reports seeing “black spots” in her left visual field and occasional blurring of vision in both eyes. She also developed headaches over the past 4 days, described as dull and constant, worse in the mornings. There is no associated nausea, vomiting, or photophobia. No prior history of migraines or head trauma. She denies seizures, weakness, or language difficulties.\n\nAn urgent outpatient ophthalmology evaluation was notable for left homonymous hemianopia. MRI brain with contrast demonstrated a 4.2 x 3.9 x 3.6 cm enhancing mass in the right occipital lobe with surrounding edema and mild mass effect.\n\nPast Medical History:\n- Asthma (mild, intermittent)\n- Depression (well-controlled)\n\nPast Surgical History:\n- C-section (2008)\n\nMedications:\n- Sertraline 50 mg daily\n- Albuterol inhaler PRN\n- Dexamethasone 4 mg IV q6h (started in ED)\n- Levetiracetam 500 mg BID (started in ED)\n\nAllergies:\n- None\n\nFamily History:\n- Mother: Alive, 70, diabetes\n- Father: Deceased, colon cancer at 66\n- No known hereditary syndromes\n\nSocial History:\n- Never smoker\n- No alcohol or illicit drug use\n- Lives with partner and teenage son\n- Works as a graphic designer\n\nReview of Systems:\n- Neurologic: Visual disturbance, mild headache\n- Psychiatric: Anxiety related to symptoms\n- Respiratory: Occasional wheeze, no SOB\n- All others: Negative\n\nPhysical Exam:\nVitals: T 97.9 °F | HR 82 | BP 124/76 | RR 14 | SpO₂ 99% RA\nGeneral: Pleasant, anxious but cooperative\nNeuro:\n- Mental status: Alert, oriented x3, normal memory\n- Visual fields: Left homonymous hemianopia confirmed\n- Cranial nerves: Otherwise intact\n- Motor/sensory/reflexes: Normal throughout\nOphthalmologic: Pupils equal/reactive; no papilledema\nOther systems: Unremarkable\n\nImaging:\n- MRI Brain w/ contrast: Right occipital lobe ring-enhancing lesion, moderate vasogenic edema, minimal midline shift\n- CT chest/abdomen/pelvis: No primary lesion or metastases\n\nAssessment:\n45-year-old female presenting with visual field loss due to right occipital mass consistent with high-grade glioma, likely glioblastoma.\n\nPlan:\n1. Neurosurgery – Scheduled for tumor resection via right occipital craniotomy\n2. Steroids – Continue dexamethasone to reduce edema\n3. Anticonvulsants – Continue levetiracetam\n4. Ophthalmology – Follow-up for post-op visual rehab\n5. Oncology – Consult for chemoradiation planning post-op\n6. Psychology – Support for anxiety and adjustment\n7. Family meeting – Scheduled to discuss diagnosis and treatment plan\n8. Pre-op labs and medical clearance\n9. Plan for discharge POD #3–4 if stable post-op",
    },
  }
]
