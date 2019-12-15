#### svomp – 1.0.1

Collection of frequently used **sv**elte-c**omp**onents  
**⚠️ heavily under construction at the moment**

It should be mentioned here that some components, namely "lazyload" and "prism", are coupled with my global styles lib [glocss](https://github.com/vedam/glocss) to keep stuff lean and lightweight. I don't know if this is best practise, but for me it makes most sense for now.  

---

##### install

```bash
# install as devDependency
npm i -D @vedam/svomp
```

---

##### todo

- add lightweight cookie-consent respecting the new GDPR-Guidelines

---

##### changelog

**1.0.1**

- keep nav and footer much more generic/simpler
- add store as an example
- add prism syntax-highlighter
- prism-styles global via [glocss](https://github.com/vedam/glocss/blob/master/src/prism.css) to have the option to highlight also besides svelte


**1.0.0**

- first basic version
- lazyload-styles global via [glocss](https://github.com/vedam/glocss/blob/master/src/helpers/media.css) to have the option to lazyload also besides svelte 
