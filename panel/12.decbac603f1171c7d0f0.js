(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Pwsv:function(e,t,i){"use strict";i.r(t),i.d(t,"UserModule",function(){return D});var a=i("ofXK"),o=i("NA4g"),r=i("s7LF"),n=i("tyNb"),s=i("5QHs"),l=i("LUZP"),m=i("OaSA"),c=i("iELJ"),d=i("fXoL"),u=i("AytR"),b=i("IheW");let p=(()=>{class e{constructor(e){this.http=e}showUsers(){return this.http.get(u.a.API_URL+"/v1/users")}createApiToken(e){return this.http.post(u.a.API_URL+"/api-tokens/",e)}createSingleUser(e){return this.http.post(u.a.API_URL+"/v1/users/single",e)}updateUser(e){return this.http.patch(`${u.a.API_URL}/v1/users/${e.id}`,e)}createManyUsers(e){return this.http.post(u.a.API_URL+"/v1/users/many",e)}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(b.b))},e.\u0275prov=d.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=i("lvt7"),h=i("kA0x");let g=(()=>{class e{constructor(e){this.http=e}showRoles(){return this.http.get(u.a.API_URL+"/v1/roles")}}return e.\u0275fac=function(t){return new(t||e)(d.Wb(b.b))},e.\u0275prov=d.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=i("M9ds"),S=i("Q2Ze"),R=i("e6WT"),y=i("TN/R"),_=i("ZTz/"),k=i("UhP/"),B=i("Dxy4");function F(e,t){if(1&e&&(d.Sb(0,"mat-option",19),d.zc(1),d.Rb()),2&e){const e=t.$implicit;d.ic("value",e.id),d.Bb(1),d.Bc(" ",e.name," ")}}function U(e,t){if(1&e&&(d.Sb(0,"mat-option",19),d.zc(1),d.Rb()),2&e){const e=t.$implicit;d.ic("value",e.id),d.Bb(1),d.Bc(" ",e.name," ")}}function N(e,t){if(1&e&&(d.Sb(0,"mat-form-field",11),d.Sb(1,"mat-label"),d.zc(2,"Rol"),d.Rb(),d.Sb(3,"mat-select",25),d.yc(4,U,2,2,"mat-option",16),d.Rb(),d.Rb()),2&e){const e=d.dc();d.Bb(4),d.ic("ngForOf",e.roles)}}function I(e,t){if(1&e&&(d.Sb(0,"mat-option",19),d.zc(1),d.Rb()),2&e){const e=t.$implicit;d.ic("value",e.id),d.Bb(1),d.Bc(" ",e.name," ")}}function C(e,t){1&e&&(d.Sb(0,"mat-error"),d.zc(1,"Selecciona una empresa por favor"),d.Rb())}function M(e,t){1&e&&(d.Sb(0,"mat-error"),d.zc(1,"Sube un archivo csv por favor"),d.Rb())}function A(e,t){if(1&e&&(d.Sb(0,"div"),d.Sb(1,"p"),d.zc(2),d.Rb(),d.Rb()),2&e){const e=d.dc(2);d.Bb(2),d.Ac(e.filePath)}}function P(e,t){if(1&e){const e=d.Tb();d.Sb(0,"mat-tab",26),d.Sb(1,"form",27),d.Sb(2,"mat-form-field",28),d.Sb(3,"mat-label"),d.zc(4,"Empresa"),d.Rb(),d.Sb(5,"mat-select",15),d.yc(6,I,2,2,"mat-option",16),d.Rb(),d.yc(7,C,2,0,"mat-error",29),d.Rb(),d.Nb(8,"p"),d.Sb(9,"button",30),d.Zb("click",function(){return d.qc(e),d.oc(12).click()}),d.zc(10,"Subir Archivo csv"),d.Rb(),d.Sb(11,"input",31,32),d.Zb("change",function(t){return d.qc(e),d.dc().onChange(t)}),d.Rb(),d.yc(13,M,2,0,"mat-error",29),d.yc(14,A,3,1,"div",29),d.Nb(15,"p"),d.Rb(),d.Rb()}if(2&e){const e=d.dc();d.Bb(1),d.ic("formGroup",e.manyUsersForm),d.Bb(5),d.ic("ngForOf",e.companys),d.Bb(1),d.ic("ngIf",e.manyUsersForm.controls.enterprise_id.invalid),d.Bb(6),d.ic("ngIf",e.manyUsersForm.controls.file.invalid),d.Bb(1),d.ic("ngIf",e.filePath&&""!==e.filePath)}}let w=(()=>{class e{constructor(e,t,i,a,o,r,n,s){this.dialogRef=e,this.data=t,this.userSvc=i,this.formB=a,this.notiSvc=o,this.companySvc=r,this.rolSvc=n,this.datepipe=s,this.formData=new FormData,this.filePath="",this.buildForm()}ngOnInit(){var e;this.getCompanies(),this.getRoles(),(null===(e=this.data)||void 0===e?void 0:e.element)&&this.userForm.patchValue(this.data.element)}submitUser(){this.userForm.invalid&&(this.userInvalid=!0),this.manyUsersForm.invalid&&(this.manyUsersInvalid=!0),this.userInvalid&&this.manyUsersInvalid?this.notiSvc.openSnackBar("Algunos de los campos son invalidos",2e3):(this.setUser(),this.data.element?this.userSvc.updateUser(this.userData).subscribe(e=>{console.log(e),this.notiSvc.openSnackBar("Usuario actualizado correctamente",2e3),this.dialogRef.close()},e=>{this.notiSvc.openSnackBar("Hubo un error al momendo de actualizar el usuario",2e3),console.log(e)}):this.userInvalid?(this.setManyUsers(),this.userSvc.createManyUsers(this.formData).subscribe(e=>{console.log(e),this.notiSvc.openSnackBar("Lista de usuarios creada correctamente",2e3),this.dialogRef.close()},e=>{this.notiSvc.openSnackBar("Hubo un error al momento de crear los usuarios",2e3),console.log(e)})):this.userSvc.createSingleUser(this.userData).subscribe(e=>{console.log(e),this.notiSvc.openSnackBar("Usuario agregado correctamente",2e3),this.dialogRef.close()},e=>{this.notiSvc.openSnackBar("Hubo un error al momendo de agregar el usuario",2e3),console.log(e)}))}onChange(e){if(e.target.files){var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=e=>{this.filePath=document.getElementById("file").files[0].name,console.log(this.filePath)}}}getCompanies(){this.companySvc.showCompanies().subscribe(e=>{this.companys=e.data})}getRoles(){this.rolSvc.showRoles().subscribe(e=>{this.roles=e.data;const t=this.roles.find(e=>"Invitado"==e.name);var i=this.roles.indexOf(t);i>-1&&this.roles.splice(i,1)})}setUser(){var e,t,i,a,o,r,n,s,l,m,c,d,u,b,p,f,h,g,v,S,R,y,_;if(this.data.element){let u;u=this.data.element.email==(null===(e=this.userForm.get("email"))||void 0===e?void 0:e.value)?null:null===(t=this.userForm.get("email"))||void 0===t?void 0:t.value,console.log(u),this.userData={id:(null===(i=this.data)||void 0===i?void 0:i.element)?null===(a=this.data)||void 0===a?void 0:a.element.id:null,name:null===(o=this.userForm.get("name"))||void 0===o?void 0:o.value,email:null===(r=this.userForm.get("email"))||void 0===r?void 0:r.value.trim(),last_name:null===(n=this.userForm.get("last_name"))||void 0===n?void 0:n.value,last_name2:null===(s=this.userForm.get("last_name2"))||void 0===s?void 0:s.value,enterprise_id:null===(l=this.userForm.get("enterprise_id"))||void 0===l?void 0:l.value,birthdate:this.datepipe.transform(null===(m=this.userForm.get("birthdate"))||void 0===m?void 0:m.value,"yyyy/MM/dd"),premium:null===(c=this.userForm.get("premium"))||void 0===c?void 0:c.value,phone:null===(d=this.userForm.get("phone"))||void 0===d?void 0:d.value}}else this.userData={id:(null===(u=this.data)||void 0===u?void 0:u.element)?null===(b=this.data)||void 0===b?void 0:b.element.id:null,name:null===(p=this.userForm.get("name"))||void 0===p?void 0:p.value,email:null===(f=this.userForm.get("email"))||void 0===f?void 0:f.value,last_name:null===(h=this.userForm.get("last_name"))||void 0===h?void 0:h.value,last_name2:null===(g=this.userForm.get("last_name2"))||void 0===g?void 0:g.value,enterprise_id:null===(v=this.userForm.get("enterprise_id"))||void 0===v?void 0:v.value,birthdate:this.datepipe.transform(null===(S=this.userForm.get("birthdate"))||void 0===S?void 0:S.value,"yyyy/MM/dd"),premium:null===(R=this.userForm.get("premium"))||void 0===R?void 0:R.value,phone:null===(y=this.userForm.get("phone"))||void 0===y?void 0:y.value,role_id:null===(_=this.userForm.get("role_id"))||void 0===_?void 0:_.value}}setManyUsers(){var e;this.formData.append("enterprise_id",null===(e=this.manyUsersForm.get("enterprise_id"))||void 0===e?void 0:e.value),this.formData.append("file",document.getElementById("file").files[0])}buildForm(){this.userForm=this.formB.group(this.data.element?{name:["",r.p.required],last_name:["",r.p.required],last_name2:[""],email:["",r.p.required],enterprise_id:["",r.p.required],birthdate:[""],premium:["",r.p.required],phone:["",r.p.required],role_id:[""]}:{name:["",r.p.required],last_name:["",r.p.required],last_name2:[""],email:["",r.p.required],enterprise_id:["",r.p.required],birthdate:["",r.p.required],premium:["",r.p.required],phone:["",r.p.required],role_id:["",r.p.required]}),this.manyUsersForm=this.formB.group({enterprise_id:["",r.p.required],file:["",r.p.required]})}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(c.g),d.Mb(c.a),d.Mb(p),d.Mb(r.d),d.Mb(f.a),d.Mb(h.a),d.Mb(g),d.Mb(a.e))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-user-dialog"]],decls:62,vars:16,consts:[[1,"container"],["mat-dialog-title",""],[1,"mat-typography"],["mat-align-tabs","center"],[3,"label"],["autocomplete","off",1,"example-form",2,"text-align","center","padding-top","10px",3,"formGroup"],["appearance","fill",1,"example-full-width"],["matInput","","placeholder","Ex. Juan","formControlName","name","required",""],["matInput","","placeholder","Ex. Perez","formControlName","last_name"],["matInput","","placeholder","Ex. Lopez","formControlName","last_name2"],["matInput","","placeholder","Ex. mail@mail.com","formControlName","email","required","","email",""],["appearance","fill"],["matInput","","formControlName","birthdate",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["formControlName","enterprise_id"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill",4,"ngIf"],["formControlName","premium"],[3,"value"],["matInput","","placeholder","Ex. 1234567890","formControlName","phone","required",""],["label","Agregar varios usuarios",4,"ngIf"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit",3,"click"],["formControlName","role_id"],["label","Agregar varios usuarios"],["autocomplete","off","enctype","multipart/form-data",1,"example-form",2,"text-align","center","padding-top","10px",3,"formGroup"],["appearance","outline"],[4,"ngIf"],["type","button","mat-raised-button","",3,"click"],["hidden","","formControlName","file","id","file","type","file","accept",".csv","required","",3,"change"],["file",""]],template:function(e,t){if(1&e&&(d.Sb(0,"div",0),d.Sb(1,"h1",1),d.zc(2),d.Rb(),d.Sb(3,"mat-dialog-content",2),d.Sb(4,"mat-tab-group",3),d.Sb(5,"mat-tab",4),d.Sb(6,"form",5),d.Sb(7,"mat-form-field",6),d.Sb(8,"mat-label"),d.zc(9),d.Rb(),d.Nb(10,"input",7),d.Rb(),d.Nb(11,"p"),d.Sb(12,"mat-form-field",6),d.Sb(13,"mat-label"),d.zc(14),d.Rb(),d.Nb(15,"input",8),d.Rb(),d.Nb(16,"p"),d.Sb(17,"mat-form-field",6),d.Sb(18,"mat-label"),d.zc(19),d.Rb(),d.Nb(20,"input",9),d.Rb(),d.Nb(21,"p"),d.Sb(22,"mat-form-field",6),d.Sb(23,"mat-label"),d.zc(24),d.Rb(),d.Nb(25,"input",10),d.Rb(),d.Nb(26,"p"),d.Sb(27,"mat-form-field",11),d.Sb(28,"mat-label"),d.zc(29,"Fecha Nacimiento"),d.Rb(),d.Nb(30,"input",12),d.Nb(31,"mat-datepicker-toggle",13),d.Nb(32,"mat-datepicker",null,14),d.Rb(),d.Nb(34,"p"),d.Sb(35,"mat-form-field",11),d.Sb(36,"mat-label"),d.zc(37,"Empresa"),d.Rb(),d.Sb(38,"mat-select",15),d.yc(39,F,2,2,"mat-option",16),d.Rb(),d.Rb(),d.Nb(40,"p"),d.yc(41,N,5,1,"mat-form-field",17),d.Nb(42,"p"),d.Sb(43,"mat-form-field",11),d.Sb(44,"mat-label"),d.zc(45,"Premium"),d.Rb(),d.Sb(46,"mat-select",18),d.Sb(47,"mat-option",19),d.zc(48," Premium "),d.Rb(),d.Sb(49,"mat-option",19),d.zc(50," No Premium "),d.Rb(),d.Rb(),d.Rb(),d.Nb(51,"p"),d.Sb(52,"mat-form-field",6),d.Sb(53,"mat-label"),d.zc(54),d.Rb(),d.Nb(55,"input",20),d.Rb(),d.Rb(),d.Rb(),d.yc(56,P,16,5,"mat-tab",21),d.Rb(),d.Rb(),d.Sb(57,"mat-dialog-actions",22),d.Sb(58,"button",23),d.zc(59,"Cancelar"),d.Rb(),d.Sb(60,"button",24),d.Zb("click",function(){return t.submitUser()}),d.zc(61),d.Rb(),d.Rb(),d.Rb()),2&e){const e=d.oc(33);d.Bb(2),d.Ac(t.data.edit?"Editar Usuario":"Agregar Usuario"),d.Bb(3),d.jc("label",t.data.edit?"Editar Usuario":"Agregar un Usuario"),d.Bb(1),d.ic("formGroup",t.userForm),d.Bb(3),d.Ac(t.data.edit?"Editar Nombre":"Nombre"),d.Bb(5),d.Ac(t.data.edit?"Editar Apellido Paterno":"Apellido Paterno"),d.Bb(5),d.Ac(t.data.edit?"Editar Apellido Materno":"Apellido Materno"),d.Bb(5),d.Ac(t.data.edit?"Editar Correo":"Email"),d.Bb(6),d.ic("matDatepicker",e),d.Bb(1),d.ic("for",e),d.Bb(8),d.ic("ngForOf",t.companys),d.Bb(2),d.ic("ngIf",!(null!=t.data&&t.data.element)),d.Bb(6),d.ic("value",!0),d.Bb(2),d.ic("value",!1),d.Bb(5),d.Ac(t.data.edit?"Editar Telefono":"Telefono"),d.Bb(2),d.ic("ngIf",!t.data.edit),d.Bb(5),d.Ac(t.data.edit?"Editar Usuario":"Agregar Usuario")}},directives:[c.h,c.e,v.b,v.a,r.q,r.l,r.f,S.c,S.f,R.b,r.b,r.k,r.e,r.o,r.c,y.b,y.d,S.g,y.a,_.a,a.k,a.l,k.m,c.c,B.a,c.d,S.b],styles:[".campo[_ngcontent-%COMP%]{width:100%}"]}),e})();const z=[{path:"",component:(()=>{class e{constructor(e,t,i){this.userSvc=e,this.dialog=t,this.formB=i,this.displayedColumns=["id","nombre","last_name","birthdate","email","premium","edit"],this.token="",this.buildForm()}ngOnInit(){}openDialog(e,t){this.dialog.open(w,{disableClose:!1,data:{edit:e,element:t}}).afterClosed().subscribe(e=>{e||this.getUsers()})}getUsers(){this.userSvc.showUsers().subscribe(e=>{this.users=e.data,this.setData()},e=>{console.log(e)})}getToken(){this.token="hola",this.setAuthData(),this.userSvc.createApiToken(this.apiData).subscribe(e=>{console.log(e),this.token=e.data.key},e=>{console.log(e)})}buildForm(){this.logInForm=this.formB.group({email:[""],password:["",r.p.required]})}setAuthData(){this.apiData={expiry_date:"2024-05-21",description:"Para test"}}setData(){this.dataSource=new m.l,this.dataSource.data=this.users,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}selecteRow(e){this.user=e}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(p),d.Mb(c.b),d.Mb(r.d))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-user"]],viewQuery:function(e,t){if(1&e&&(d.Cc(s.a,!0),d.Cc(l.a,!0)),2&e){let e;d.nc(e=d.ac())&&(t.paginator=e.first),d.nc(e=d.ac())&&(t.sort=e.first)}},decls:16,vars:2,consts:[[1,"mat-elevation-z8","container",2,"margin-top","3%"],["autocomplete","off",3,"formGroup"],[1,"form-container"],[1,"imagen"],[1,"mat-title",2,"text-align","center"],["appearance","outline","color","accent"],["matInput","","formControlName","email","disabled","",3,"ngModel"],["mat-raised-button","","color","primary","type","submit",3,"click"],[1,"paddingTop"]],template:function(e,t){1&e&&(d.Sb(0,"div",0),d.Sb(1,"form",1),d.Sb(2,"div",2),d.Nb(3,"div",3),d.Sb(4,"div",4),d.zc(5,"Generar Token"),d.Rb(),d.Sb(6,"div",3),d.Sb(7,"mat-form-field",5),d.Sb(8,"mat-label"),d.zc(9,"Token"),d.Rb(),d.Nb(10,"input",6),d.Rb(),d.Nb(11,"p"),d.Nb(12,"p"),d.Sb(13,"button",7),d.Zb("click",function(){return t.getToken()}),d.zc(14,"Generar Token"),d.Rb(),d.Nb(15,"div",8),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.Bb(1),d.ic("formGroup",t.logInForm),d.Bb(9),d.ic("ngModel",t.token))},directives:[r.q,r.l,r.f,S.c,S.f,R.b,r.b,r.k,r.e,B.a],styles:[".mat-form-field[_ngcontent-%COMP%]{display:inline;margin-bottom:3em;padding-top:10px;flex-direction:column;align-items:flex-start}.mat-raised-button[_ngcontent-%COMP%]{width:100%;height:40px;font-size:large}.form-container[_ngcontent-%COMP%]{width:95%;max-width:350px}.paddingTop[_ngcontent-%COMP%]{margin:20px}.container[_ngcontent-%COMP%]{background-color:#fff;margin-top:4em;margin-left:auto;margin-right:auto;height:30em;width:75%;max-width:400px;display:flex;justify-content:center}  .mat-form-field-appearance-outline .mat-form-field-outline,   .mat-form-field.mat-focused .mat-form-field-label{opacity:1!important}  .mat-focused .mat-form-field-underline .mat-form-field-ripple{background-color:#fff!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{opacity:.8!important}  .mat-form-field-label{opacity:.6!important}.imagen[_ngcontent-%COMP%]{text-align:center}.mat-title[_ngcontent-%COMP%]{font-size:2em;margin-top:.5em;margin-bottom:1em}p[_ngcontent-%COMP%]{margin-top:1.5em;text-align:center;color:#fff}.box[_ngcontent-%COMP%]{height:50vh;margin:0;padding:0;background-color:#068e8e}.footer[_ngcontent-%COMP%]{position:fixed;right:0;top:0;height:50vh;width:100%;background:#068e8e}"]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[n.b.forChild(z)],n.b]}),e})();var q=i("OC/Z");let D=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[a.c,x,o.a,r.n,q.a,r.g]]}),e})()}}]);