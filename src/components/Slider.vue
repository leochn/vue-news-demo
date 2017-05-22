<template>
	<div class='banner'>
		<ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
                <div class="text-box">
                    <h2>图片1</h2>
                    <p>1</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
                <div class="text-box">
                    <h2>风景画</h2>
                    <p>风景画</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
                <div class="text-box">
                    <h2>图片3</h2>
                    <p>3</p>
                </div>
            </li>
            <li><img src="../assets/images/img_1.jpg" alt=""/>
                <div class="text-box">
                    <h2>图片4</h2>
                    <p>4</p>
                </div>
            </li>
        </ul>
        <ol>
        	<li class='active'></li>
        	<li></li>
        	<li></li>
        	<li></li>
        </ol>
	</div>
</template>
<script>
    export default {
        mounted(){
            this.fnSlider();
        },
        watch:{
            // '$route':function(){
            //  alert(1);
            // }
        },
        methods:{
            fnSlider(){
                $(function (){
                    var mySwipe=new Swipe($('.banner')[0],{
                        auto:2000,
                        continuous:true,
                        stopPropation:true,
                        callback:function (index,element){
                            $('.banner ol li').removeClass('active');
                            $('.banner ol li').eq(index).addClass('active');
                        }
                    });
                });
            }
        }
    }
</script>