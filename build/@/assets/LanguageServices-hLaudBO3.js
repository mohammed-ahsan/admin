import{r as e}from"./toast-33DDocbW.js";const u={getAllLanguages:async()=>e.get("/language/all"),getShowingLanguage:async()=>e.get("/language/show"),getLanguageById:async a=>e.get(`/language/${a}`),addLanguage:async a=>e.post("/language/add",a),addAllLanguage:async a=>e.post("/language/add/all",a),updateLanguage:async(a,g)=>e.put(`/language/${a}`,g),updateManyLanguage:async a=>e.patch("language/update/many",a),updateStatus:async(a,g)=>e.put(`/language/status/${a}`,g),deleteLanguage:async(a,g)=>e.patch(`/language/${a}`,g),deleteManyLanguage:async a=>e.patch("/language/delete/many",a)};export{u as L};
