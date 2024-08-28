export default function BEStatus({status, remaining=0, total=0}){
    if (status==='busy')
    {
        return (
            <>
                <div style={{width:'100vw', display:'flex', justifyContent:'center'}}>
                    <div style={{backgroundColor:'#e74c3c', padding:'5px', paddingLeft:'40px', paddingRight:'40px', color:'white', borderRadius:'15px', display:'flex', alignItems:'center', justifyContent:'center', height:'80px', width:'190px', border:'1px solid black'}}>
                        <div>
                            <div style={{textAlign:'center'}}>
                                <h4>Busy</h4>
                            </div>
                            <div style={{textAlign:'center'}}>
                                <h6>{remaining} out of {total} Email Sent</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div style={{width:'100vw', display:'flex', justifyContent:'center'}}>
            <div style={{backgroundColor:'#27ae60', padding:'5px', paddingLeft:'40px', paddingRight:'40px', color:'white', borderRadius:'15px', display:'flex', alignItems:'center', justifyContent:'center', height:'80px', width:'190px', border:'1px solid black'}}>
                    <h4>Available</h4>
                </div>
            </div>
        </>
    )

    
}