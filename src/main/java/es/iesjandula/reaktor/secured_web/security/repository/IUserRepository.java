package es.iesjandula.reaktor.secured_web.security.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import es.iesjandula.reaktor.models.User;

/**
 * @author David Martinez
 *
 */
public interface IUserRepository extends JpaRepository<User, Integer>
{

	/**
	 * Method findByUserName
	 * 
	 * @param  userName
	 * @return
	 */
	User findByUserName(String userName);
}
