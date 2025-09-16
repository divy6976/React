chahe aap create app se kaam kre ya vite se kaam kre


toh function me Captilaize name krhe and file ka bhi name capital rkhe

kuch library force kregi file ka extension jsx rkhn ko jaise vite



----------------------------------------------------------------
Components & Props

State & Hooks (useState, useEffect)

Routing & Navigation

API integration

Project banake practice

--------------------------------------------------------------------


ab start  

hooks UI pr agar update hoga toh react will control

toh react ne diye hooks aur usi se UI update hoga


usestate-jo change ko UI pr dikhata hai

useCallback- Jab tum koi function multiple jagah use kar rahe ho (especially child components ko), aur wo function sirf tab change hona chahiye jab uske dependencies change ho, tab useCallback use karte ho.

useEffect- Jab page reload ho ya component mount ho, aur koi function automatically chalana ho, tab useEffect ka use karte hain.

useref= jab link krwana ho 


isActve = sb kisi page pr jao toh udr colour change ho jaye


React router dekhen ke liye 07 ke main.jsx aur layour me project setupe dkeh liyo

hmesa project bannae ke phe  react router se routes setup krlo


contextApi => ki jrrut =>  <App>
  <Navbar theme={theme} />
  <Home theme={theme} />
  <About theme={theme} />
  <Profile theme={theme} />
</App>

Agar tu sirf apne project me theme switcher bana raha hai → Context API.

Agar tu E-commerce site bana raha hai jisme cart, filters, order history hai → Redux Toolkit.




--------------------------------------------------
props =>    acha mtlb gift ek hi jgh rha h bas kiska naam rhega uspe wo mae parent se child ke pass bejduga parent se child ko and wo chap ke degdega gift pe nam

jab ek container ko bar bar use krna ho apne tarike se

props ek object nhota hai

chahe toh direct destructure krlo


---------------------------------------------------------

context api 08mini me use

phle context bnaya .js me 


har ek context ke sath provider bhi banna pdta hai

provider me {children} as a paramteer pass mtlb koi bhi prop aye use as it is likhdo




fr componet ko context je andr wrap


---------------------------------------------------------------------

Redux ToolKit--

phle dono package install kro


phle store bnao - ek application ka bas ek store
Steps
Configure store leke ana hai iske andr reducer introduce

fr reducer/slice bnao

janane ke liye reduxtooltry folder me dkehe 
slice whi se smjana


wrap krna ya toh app me krlo ya main me privder lgage ke krlo dekhlena reduxtooltry folder me