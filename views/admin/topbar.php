<style>
	/* .logo {
    margin: auto;
    font-size: 20px;
    background: #420707;
    padding: 7px 11px;
    border-radius: 50% 50%;
    color: #420707;
} */
.navbar{
  background: url(../admin/assets/uploads/background.jpeg);
   padding: 0 ; 
}
</style>


<!-- <nav class="navbar navbar-light fixed-top bg-secondary" style="padding:0"> -->
<nav class="navbar">
  <div class="container-fluid mt-2 mb-2">
  	<div class="col-lg-12">
  		<div class="col-md-1 float-left" style="display: flex;">
  		
  		</div>
      <div class="col-md-4 float-left text-white">
        <!-- <large><b><?#php echo isset($_SESSION['system']['name']) ? $_SESSION['system']['name'] : '' ?></b></large> -->
        <large><h6><b>BASS <sub>Let the child earn KNOWLEDGE not MONEY</b></h6></large>
      </div>
	  	<div class="float-right">
        <div class=" dropdown mr-4">
            <a href="#" class="text-white dropdown-toggle"  id="account_settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo $_SESSION['username'] ?> </a>
              <div class="dropdown-menu" aria-labelledby="account_settings" style="left: -2.5em;">
                <a class="dropdown-item" href="javascript:void(0)" id="manage_my_account"><i class="fa fa-cog"></i> Manage Account</a>
                <a class="dropdown-item" href="../nodallogin.html?action=logout"><i class="fa fa-power-off"></i> Logout</a>
              </div>
        </div>
      </div>
  </div>
  
</nav>

<script>
  $('#manage_my_account').click(function(){
    uni_modal("","manage_user.php?id=<?php echo $_SESSION['login_id'] ?>&mtype=own")
  })
</script>