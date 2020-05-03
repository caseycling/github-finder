import React from 'react'

//Destructuring user props
const UserItem = ({ user: { login, avatar_url, html_url }  }) => {
    // console.log(this.props.user)

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
            <h3>{login}</h3>
s
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
}

export default UserItem
