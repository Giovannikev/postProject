import { Box } from "@/Auth/box/box";
import { Link } from "react-router-dom";

export const RegisterView = () => {
      return(
            <div className="grid grid-cols-2 gap-20 mb-32 mt-10 px-40">
                  <div className="flex items-center">

                        <div className="relative w-full h-[531px]">
                             <img src="https://cdn.pixabay.com/photo/2016/04/01/10/52/blonde-1300066_640.png" alt="Singnin" width={400}/>
                        </div>
                  </div>
                  
                  <aside className="flex items-center">
                        <Box padding_y="py-5" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                              <div className="flex items-center justify-between">
                                    <h1>Inscription</h1>
                                          
                                    <div className="flex items-center gap-1">
                                          <h2 className="text-gray-600">Tu as déjà un compte ?</h2>
                                          <Link to="/register/Login" className="text-primary">Connexion</Link>
                                    </div>
                              </div>
                        </Box>
                  </aside>
            </div>
      );
};