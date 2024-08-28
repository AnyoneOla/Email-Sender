export default function TabBar({active, setActive}){
    function Tab({name, active=false}){

        return (
            <>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'20px', cursor:'pointer'}} onClick={()=>setActive(name)}>
                    <div style={{width:'90px', height:'40px', border:'1px solid black', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:(active)?'#3498db':'white'}}>
                        <div>{name}</div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', marginTop:'30px'}}>
                <Tab name='Main' active={active==='Main'}/>
                <Tab name='Draft Email' active={active==='Draft Email'}/>
                <Tab name='Update' active={active==='Update'}/>
            </div>
        </>
    )
}

